export const useConfirm = (message: string, onConfirm: () => Promise<void>) => {
  if (message === null) {
    return;
  }

  const windowConfirm = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return windowConfirm;
};
