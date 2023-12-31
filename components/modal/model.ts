import React from 'react';

export interface IModal {
  children: React.ReactNode;
  keepMounted?: boolean;
  backdrop?: boolean;
}
