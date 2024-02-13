import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function Subscriptions({ modalContent }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  function nav() {
    navigate("/Contact")
  }

  return (
    <>
      <section>
        <div className="banner-container">
          <div>
            <h2 className="banner-title">Subscription deals available!</h2>
          </div>
          <div>
            <Button onClick={onOpen} >
              More Info
            </Button>
          </div>
        </div>
        <Modal placement="top-center" scrollBehavior="inside" backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Subscriptions</ModalHeader>
                <ModalBody>
                  {modalContent && modalContent.map((oneItem) => (
                    <div>
                      <h2 className="modal-subtitle">{oneItem.title}</h2>
                      {oneItem.text.map((oneParagraph) => (
                        <div>
                          <p>{oneParagraph}</p>
                          <br></br>
                        </div>
                      ))}
                    </div>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button onPress={nav}>
                    Contact
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </>
  )
}