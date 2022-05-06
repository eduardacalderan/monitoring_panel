import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { Container } from "./styles";

interface ErrorFixModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ErrorFixModal({ isOpen, onRequestClose }: ErrorFixModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div className="background-modal"></div>
        <div className="error-fix-container">
          <div className="error-modal-content">
            <div className="btn">
              <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
              >
                <i>
                  <MdClose />
                </i>
              </button>
            </div>

            <h3>Possível forma de resolver este erro: </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestiae ipsa quaerat non nobis saepe sequi dolores corporis
              tempora ea architecto, alias numquam aut reiciendis commodi
              debitis. Quasi, blanditiis quas.
            </p>
          </div>
        </div>
      </Container>
    </Modal>
  );
}
