import { useInfiniteQuery } from '@tanstack/react-query';
import { Post } from '_app/(root)/(tabs)/(index)';
import { useState } from 'react';

const handleGetPage = async (page: number, pageSize = 20): Promise<Post[]> => {
  const resp = await fetch(
    `https://api.yup.io/feed/dailyhits?limit=${pageSize}&start=${
      page * pageSize
    }`
  );
  const json = (await resp.json()) as Post[];
  return json;
};

export const useGetFeed = () => {
  const [page, setPage] = useState(0);
  return useInfiniteQuery(['feed', page], () => handleGetPage(page), {
    onError: () => {
      console.error('Unable to fetch feed');
    },
    getNextPageParam: (lastPage, pages) => {
      return page + 1;
    },
    refetchInterval: false,
  });
};
