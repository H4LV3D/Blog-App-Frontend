import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "@/components/shared/MobileSidebar/MobileSidebar";
import SearchModal from "@/components/modals/SearchModal/SearchModal";
import EditBlogModal from "@/components/modals/EditBlogModal/EditBlogModal";

interface Props {
  children: React.ReactNode;
}

const ModalProvider: React.FC<Props> = ({ children }) => {
  const searchBoxModal = useAppSelector((state) => state.searchBox.show);
  const mobileSidebar = useAppSelector((state) => state.mobileSidebar.show);
  const EditModal = useAppSelector((state) => state.blog.show);

  return (
    <div>
      <div>
        <AnimatePresence>{searchBoxModal && <SearchModal />}</AnimatePresence>
      </div>
      <div>
        <AnimatePresence>{mobileSidebar && <MobileSidebar />}</AnimatePresence>
      </div>
      <div>
        <AnimatePresence>{EditModal && <EditBlogModal />}</AnimatePresence>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ModalProvider;
