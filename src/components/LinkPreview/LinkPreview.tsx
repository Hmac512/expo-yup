import * as React from 'react';
import {
  LayoutAnimation,
  LayoutChangeEvent,
  Linking,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import { Image } from 'expo-image';

import { PreviewData, PreviewDataImage } from './types';
import { getPreviewData, oneOf } from './utils';

export interface LinkPreviewProps {
  containerStyle?: StyleProp<ViewStyle>;
  enableAnimation?: boolean;
  header?: string;
  metadataContainerStyle?: StyleProp<ViewStyle>;
  metadataTextContainerStyle?: StyleProp<ViewStyle>;
  onPreviewDataFetched?: (previewData: PreviewData) => void;
  previewData?: PreviewData;
  renderDescription?: (description: string) => React.ReactNode;
  renderHeader?: (header: string) => React.ReactNode;
  renderImage?: (image: PreviewDataImage) => React.ReactNode;
  renderLinkPreview?: (payload: {
    aspectRatio?: number;
    containerWidth: number;
    previewData?: PreviewData;
  }) => React.ReactNode;
  renderMinimizedImage?: (image: PreviewDataImage) => React.ReactNode;
  renderText?: (text: string) => React.ReactNode;
  renderTitle?: (title: string) => React.ReactNode;
  requestTimeout?: number;
  text: string;
  textContainerStyle?: StyleProp<ViewStyle>;
  touchableWithoutFeedbackProps?: TouchableWithoutFeedbackProps;
}

export const LinkPreview = React.memo(
  ({
    containerStyle,
    enableAnimation,
    header,
    metadataContainerStyle,
    metadataTextContainerStyle,
    onPreviewDataFetched,
    previewData,
    renderDescription,
    renderHeader,
    renderImage,
    renderLinkPreview,
    renderMinimizedImage,
    renderText,
    renderTitle,
    requestTimeout = 5000,
    text,
    textContainerStyle,
    touchableWithoutFeedbackProps,
  }: LinkPreviewProps) => {
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [data, setData] = React.useState(previewData);
    const aspectRatio = data?.image
      ? data.image.width / data.image.height
      : undefined;

    React.useEffect(() => {
      let isCancelled = false;
      if (previewData) {
        setData(previewData);
        return;
      }

      const fetchData = async () => {
        setData(undefined);
        let newData = await getPreviewData(text, requestTimeout);
        if (newData.image === undefined) {
          newData = await getPreviewData(text, requestTimeout);
        }
        console.log('newData', newData);
        // Set data only if component is still mounted
        /* istanbul ignore next */
        if (!isCancelled) {
          // No need to cover LayoutAnimation
          /* istanbul ignore next */
          if (enableAnimation) {
            LayoutAnimation.easeInEaseOut();
          }

          setData(newData);
          onPreviewDataFetched?.(newData);
        }
      };

      fetchData();
      return () => {
        isCancelled = true;
      };
    }, [
      enableAnimation,
      onPreviewDataFetched,
      previewData,
      requestTimeout,
      text,
    ]);

    const handleContainerLayout = React.useCallback(
      (event: LayoutChangeEvent) => {
        setContainerWidth(event.nativeEvent.layout.width);
      },
      []
    );

    const handlePress = () => data?.link && Linking.openURL(data.link);

    const renderDescriptionNode = (description: string) => {
      return oneOf(
        renderDescription,
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
      )(description);
    };

    const renderHeaderNode = () => {
      return header
        ? oneOf(
            renderHeader,
            <Text numberOfLines={1} style={styles.header}>
              {header}
            </Text>
          )(header)
        : null;
    };

    const renderImageNode = (image: PreviewDataImage) => {
      // console.log('Image', image);
      // aspectRatio shouldn't be undefined, just an additional check
      /* istanbul ignore next */
      const ar = aspectRatio ?? 1;

      return oneOf(
        renderImage,
        <Image
          cachePolicy={'disk'}
          className="rounded-lg"
          accessibilityRole="image"
          contentFit="contain"
          source={{ uri: image.url }}
          style={StyleSheet.flatten([
            styles.image,
            ar < 1
              ? {
                  height: containerWidth,
                  minWidth: 170,
                  width: containerWidth * ar,
                }
              : {
                  height: containerWidth / ar,
                  maxHeight: containerWidth,
                  width: containerWidth,
                },
          ])}
        />
      )(image);
    };

    const renderLinkPreviewNode = () => {
      console.log('data', data);
      return oneOf(
        renderLinkPreview,
        <>
          <View
            style={StyleSheet.flatten([
              styles.textContainer,
              textContainerStyle,
            ])}
          >
            {renderHeaderNode()}
            {renderTextNode()}
            {/* Render metadata only if there are either description OR title OR
                there is an image with an aspect ratio of 1 and either description or title
              */}
            {(data?.description ||
              (data?.image &&
                aspectRatio === 1 &&
                (data?.description || data?.title)) ||
              data?.title) && (
              <View
                style={StyleSheet.flatten([
                  styles.metadataContainer,
                  metadataContainerStyle,
                ])}
              >
                <View
                  style={StyleSheet.flatten([
                    styles.metadataTextContainer,
                    metadataTextContainerStyle,
                  ])}
                >
                  {data?.title && renderTitleNode(data.title)}
                  {data?.description && renderDescriptionNode(data.description)}
                </View>
                {data?.image &&
                  aspectRatio === 1 &&
                  renderMinimizedImageNode(data.image)}
              </View>
            )}
          </View>
          {/* Render image node only if there is an image with an aspect ratio not equal to 1
              OR there are no description and title
            */}

          {data?.image &&
            (aspectRatio !== 1 || (!data?.description && !data.title)) &&
            renderImageNode(data.image)}
        </>
      )({
        aspectRatio,
        containerWidth,
        previewData: data,
      });
    };

    const renderMinimizedImageNode = (image: PreviewDataImage) => {
      return oneOf(
        renderMinimizedImage,
        <Image
          cachePolicy={'none'}
          accessibilityRole="image"
          source={{ uri: image.url }}
          style={styles.minimizedImage}
        />
      )(image);
    };

    const renderTextNode = () => oneOf(renderText, <Text>{text}</Text>)(text);

    const renderTitleNode = (title: string) => {
      return oneOf(
        renderTitle,
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      )(title);
    };

    return (
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={handlePress}
        {...touchableWithoutFeedbackProps}
      >
        <View onLayout={handleContainerLayout} style={containerStyle}>
          {renderLinkPreviewNode()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const styles = StyleSheet.create({
  description: {
    marginTop: 4,
  },
  header: {
    marginBottom: 6,
  },
  image: {
    alignSelf: 'center',
    backgroundColor: '#f7f7f8',
  },
  metadataContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  metadataTextContainer: {
    flex: 1,
  },
  minimizedImage: {
    borderRadius: 12,
    height: 48,
    marginLeft: 4,
    width: 48,
  },
  textContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  title: {
    fontWeight: 'bold',
  },
});
