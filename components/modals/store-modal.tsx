"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const isOpen = useStoreModal((state) => state.isOpen);

  return (
    <Modal
      title="Create store"
      description="Add new store to manage products and categories"
      isOpen={isOpen}
      onClose={() => {}}
    >
      Create Store Modal
    </Modal>
  );
};
