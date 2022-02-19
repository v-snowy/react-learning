import React from 'react';

interface CommentContext {
  value: string;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<CommentContext>({
  value: '',
  onChange: () => {}
});