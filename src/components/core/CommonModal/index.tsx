import CloseButton from "react-bootstrap/CloseButton";
import Modal, { ModalProps } from "react-bootstrap/Modal";

type TCommonModalProps = {
    modalProps?: ModalProps;
    ModalBodyComponent: JSX.Element;
    ModalHeaderComponent?: JSX.Element;
    ModalFooterComponent?: JSX.Element;
    showCloseButton?: boolean;
    title?: string;
    onCloseClick?: () => void;
};

const CommonModal = (props: TCommonModalProps) => {
    const {
        modalProps,
        title = "",
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        showCloseButton = true,
        onCloseClick,
    } = props;

    return (
        <Modal {...modalProps}>
            {(title || ModalHeaderComponent) && (
                <Modal.Header closeButton={showCloseButton}>
                    {ModalHeaderComponent}
                    {title && (
                        <Modal.Title as="h3" className="text-medium_lighter fw-semibold">
                            {title}
                        </Modal.Title>
                    )}
                </Modal.Header>
            )}
            {showCloseButton && !title && !ModalHeaderComponent && (
                <div className="text-end pt-2 px-2">
                    <CloseButton onClick={onCloseClick} />
                </div>
            )}
            <Modal.Body>{ModalBodyComponent}</Modal.Body>
            {ModalFooterComponent && <Modal.Footer>{ModalFooterComponent}</Modal.Footer>}
        </Modal>
    );
};

export default CommonModal;
