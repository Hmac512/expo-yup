import { Post } from '_app/(root)/(tabs)/(index)';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { FlashList } from '@shopify/flash-list';
import { LinkPreview } from './LinkPreview/LinkPreview';

export const FeedItem = ({ post }: { post: Post }) => {
  const avatarUrl = useMemo(() => {
    return post.web3Preview.creator.avatarUrl.length
      ? post.web3Preview.creator.avatarUrl
      : 'https://i.pinimg.com/originals/4b/08/35/4b0835c36b8e81ab56ca9462fad7c1fd.jpg';
  }, [post.web3CreatorProfile.avatar]);

  const attachments = useMemo(() => {
    const urls = new Set<string>([]);
    post.web3Preview.attachments.forEach((attachent) => {
      attachent.url.length && urls.add(attachent.url);
      attachent.images.forEach((image) => urls.add(image));
      attachent.videos.forEach((video) => urls.add(video));
    });
    console.log('URLS', [...urls.values()]);
    return [...urls.values()];
  }, [post.web3Preview.attachments]);

  return (
    <View
      style={{ padding: 8, flexDirection: 'column' }}
      className="bg-gray-500 rounded-lg"
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            borderRadius: 8,
            width: 64,
            height: 64,
            marginRight: 12,
          }}
          source={avatarUrl}
        />
        <View className="flex flex-col items-start">
          <Text className="font-bold text-base pb-4 w-min">
            {post.web3CreatorProfile.handle}
          </Text>
          <Text className="font-bold text-base opacity-50 w-min pr-4 flex whitespace-pre-wrap">
            {post.web3Preview.meta.record.text}
          </Text>
        </View>
      </View>
      {attachments.length ? (
        <View className="w-full h-[300px]">
          <FlashList
            estimatedItemSize={300}
            data={attachments}
            renderItem={({ item }) => {
              return (
                <LinkPreview
                  renderText={(text) => null}
                  enableAnimation
                  key={item}
                  text={item}
                />
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
