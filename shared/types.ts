export type CreateNoteCardState = {
  errors?: {
    note?: string[];
  };
  data?: {
    noteId: string;
    password: string;
  };
  success: boolean;
};

export type UnlockFormState = {
  errors?: {
    password?: string[];
  };
  message?: string | null;
};
