'use client';

import React from 'react';
import IconWrapper from '../../icons/IconWrapper';
import BookmarkIcon from '../../icons/BookmarkIcon';
import useSurah from '../../../store/surahStore';

type HandleBookmarkProps = {
  verseKey: string;
};

const HandleBookmark = ({ verseKey }: HandleBookmarkProps) => {
  const { bookmarked, addBookmark, deleteBookmarked } = useSurah((state) => ({
    bookmarked: state.bookmarked,
    addBookmark: state.addBookmarkData,
    deleteBookmarked: state.deleteBookmarkData,
  }));

  const isBookmarked = bookmarked.includes(verseKey);

  function handleBookmarkClick(verseKey) {
    if (isBookmarked) {
      deleteBookmarked(verseKey);
    } else {
      addBookmark(verseKey);
    }
  }

  return (
    <IconWrapper
      aria-label="Bookmark ayat ini"
      onClick={() => handleBookmarkClick(verseKey)}
    >
      <BookmarkIcon
        fill={isBookmarked}
        className={`md:h-6 h-5 ${
          isBookmarked
            ? 'text-emerald-500'
            : 'text-gray-500 dark:hover:text-gray-50'
        }`}
      />
    </IconWrapper>
  );
};

export default HandleBookmark;
