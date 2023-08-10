import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { FeedItem } from '_components/FeedItem';
import { useGetFeed } from 'src/hooks/useGetFeed';

const post = {
  _id: { postid: '60dbc7f4-dcc5-450c-936a-f8b6acbefad1' },
  author: 'yupcreators1',
  catVotes: { overall: { up: 9, down: 0 } },
  claimedCreatorRewards: 0,
  createdAt: '2023-08-08T21:22:07.332Z',
  creatorInfluence: 0,
  creatorPoolRedeemed: 0,
  influence: { false: 0, true: 0 },
  isCrossPost: false,
  isFlagged: false,
  isModeratorFlagged: false,
  lang: 'en',
  negativeWeight: 0,
  positiveWeight: 3.25,
  previewData: {
    creator: '',
    img: 'https://cdn.bsky.social/imgproxy/sqkL3vNBnEnO_suEFi8A3E9iausIaVoWuVyOquBJG1k/rs:fit:1000:1000:1:0/plain/bafkreid2kqb7jmpcust2atb6bvunks242oxzvkiopxf46kto7w3jd75mxm@jpeg',
    title: 'Do I just keep these forever and ever until I die?',
    description: 'Do I just keep these forever and ever until I die?',
    lastUpdated: '1691532142458',
  },
  rating: { overall: { ratingCount: 9, ratingWeight: 0 } },
  secondaryTags: [],
  tag: 'bsky',
  totalCreatorRewards: 0,
  updatedAt: '2023-08-08T21:22:07.332Z',
  url: 'at://did:plc:bppz56h6f67t2tclkgq3h5oe/app.bsky.feed.post/3k4hzucegie2u',
  web3Preview: {
    id: 'at://did:plc:bppz56h6f67t2tclkgq3h5oe/app.bsky.feed.post/3k4hzucegie2u',
    contentType: 'Post',
    protocol: 'bsky',
    creator: {
      address: '',
      did: 'did:plc:bppz56h6f67t2tclkgq3h5oe',
      avatarUrl:
        'https://cdn.bsky.social/imgproxy/L37dn6Jrn_srMQK4jWJ034UkZ0ker9QNKvmcqtOsL1Y/rs:fill:1000:1000:1:0/plain/bafkreiary2kvy3i3gl6zdsfgshvqohjaofmfdnir72pwpditzjhvblurni@jpeg',
      handle: 'pwr2dppl.bsky.social',
      fullname: 'Dr. Abolish the Police',
      yupScore: 0,
    },
    attachments: [
      {
        url: 'https://cdn.bsky.social/imgproxy/sqkL3vNBnEnO_suEFi8A3E9iausIaVoWuVyOquBJG1k/rs:fit:1000:1000:1:0/plain/bafkreid2kqb7jmpcust2atb6bvunks242oxzvkiopxf46kto7w3jd75mxm@jpeg',
        title: '',
        description: '',
        images: [
          'https://cdn.bsky.social/imgproxy/sqkL3vNBnEnO_suEFi8A3E9iausIaVoWuVyOquBJG1k/rs:fit:1000:1000:1:0/plain/bafkreid2kqb7jmpcust2atb6bvunks242oxzvkiopxf46kto7w3jd75mxm@jpeg',
        ],
        videos: [],
        favicon: '',
        _id: '64d2b369628f926ed7e81953',
      },
    ],
    content: 'Do I just keep these forever and ever until I die?',
    urls: [],
    linkPreview: [],
    mentions: {},
    meta: {
      uri: 'at://did:plc:bppz56h6f67t2tclkgq3h5oe/app.bsky.feed.post/3k4hzucegie2u',
      cid: 'bafyreigxufrs3bhn2cnezhvrpa4742w6rfyp53hjyn6b2scy2lhwavb5du',
      author: {
        did: 'did:plc:bppz56h6f67t2tclkgq3h5oe',
        handle: 'pwr2dppl.bsky.social',
        displayName: 'Dr. Abolish the Police',
        avatar:
          'https://cdn.bsky.social/imgproxy/L37dn6Jrn_srMQK4jWJ034UkZ0ker9QNKvmcqtOsL1Y/rs:fill:1000:1000:1:0/plain/bafkreiary2kvy3i3gl6zdsfgshvqohjaofmfdnir72pwpditzjhvblurni@jpeg',
        viewer: { muted: false, blockedBy: false },
        labels: [],
      },
      record: {
        text: 'Do I just keep these forever and ever until I die?',
        type: 'app.bsky.feed.post',
        langs: ['en'],
        createdAt: '2023-08-08T21:22:05.872Z',
      },
      embed: {
        type: 'app.bsky.embed.images#view',
        images: [
          {
            thumb:
              'https://cdn.bsky.social/imgproxy/sqkL3vNBnEnO_suEFi8A3E9iausIaVoWuVyOquBJG1k/rs:fit:1000:1000:1:0/plain/bafkreid2kqb7jmpcust2atb6bvunks242oxzvkiopxf46kto7w3jd75mxm@jpeg',
            fullsize:
              'https://cdn.bsky.social/imgproxy/Z3r-MD3K48Z7Y7krsGFH3SCjGY-UN9LWqyeMLe5dH-k/rs:fit:2000:2000:1:0/plain/bafkreid2kqb7jmpcust2atb6bvunks242oxzvkiopxf46kto7w3jd75mxm@jpeg',
            alt: 'Small L shaped metal tool (Allen key?)',
          },
        ],
      },
      replyCount: 14,
      repostCount: 5,
      likeCount: 49,
      indexedAt: '2023-08-08T21:22:07.332Z',
      viewer: {},
      labels: [],
      viewUrl:
        'https://bsky.app/profile/pwr2dppl.bsky.social/post/3k4hzucegie2u',
      parentPostId: null,
      rootPostId: null,
      quotedPostId: null,
      postType: 'post',
      isLabelled: true,
    },
    createdAt: '2023-08-08T21:22:07.332Z',
    platformMetrics: { likes: 73, reposts: 5, comments: 14 },
    updatedAt: '2023-08-08T21:22:07.332Z',
  },
  web3CreatorProfile: {
    _id: 'did:plc:bppz56h6f67t2tclkgq3h5oe',
    farcaster: {},
    lens: {},
    yup: {},
    bsky: {
      did: 'did:plc:bppz56h6f67t2tclkgq3h5oe',
      handle: 'pwr2dppl.bsky.social',
      avatar:
        'https://cdn.bsky.social/imgproxy/aYzvTUBm_bcfKfsxzhgIaY9uLDEcqG8ojCxQvORZl4U/rs:fill:1000:1000:1:0/plain/bafkreidxym5w6lssdrbfldkxkmtpew2ufl3jxl4yd3v3bh2tregbnjhuoi@jpeg',
      fullname: 'Dr. Abolish the Police',
      bio: 'Math doer, void screamer into, skeeting for sklout waiting for an app that values Black people. She/they.\n\nhttps://twitter.com/pwr2dppl',
    },
    handle: 'pwr2dppl.bsky.social',
    avatar:
      'https://cdn.bsky.social/imgproxy/aYzvTUBm_bcfKfsxzhgIaY9uLDEcqG8ojCxQvORZl4U/rs:fill:1000:1000:1:0/plain/bafkreidxym5w6lssdrbfldkxkmtpew2ufl3jxl4yd3v3bh2tregbnjhuoi@jpeg',
    lastActiveDate: '2023-08-08T22:32:27.203Z',
    yupScore: 0,
    noData: false,
  },
  rawPositiveWeight: 65,
  quantiles: { overall: 'none', popularity: 'none' },
  sextiles: { overall: 'none', popularity: 'none' },
  weights: { overall: 0, popularity: 0 },
  avatar: '',
};

export type Post = typeof post;

export default function Feed() {
  const { data: feedData, fetchNextPage } = useGetFeed();

  const flattenData = feedData?.pages.flatMap((page) => page);
  return (
    <View className="w-full h-full p-2">
      <FlashList
        data={flattenData}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        renderItem={({ item }) => {
          return <FeedItem post={item} />;
        }}
        estimatedItemSize={200}
        onEndReached={fetchNextPage}
        ItemSeparatorComponent={() => (
          <View className="w-full h-3 bg-gray-200" />
        )}
      />
    </View>
  );
}
