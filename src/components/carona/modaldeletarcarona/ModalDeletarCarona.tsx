import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import DeletarCarona from "../deletarcarona/DeletarCarona";

function ModalDeletarCarona() {
  return (
    <>
      <Popup
        trigger={
          <button
            type="button"
            className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800"
          >
            Deletar
          </button>
        }
        modal
        closeOnDocumentClick={false}
        closeOnEscape={false}
        contentStyle={{ borderRadius: "1rem", paddingBottom: "2rem" }}
      >
        {(close: () => void) => <DeletarCarona onClose={close} />}
      </Popup>
    </>
  );
}

export default ModalDeletarCarona;
