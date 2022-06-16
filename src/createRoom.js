import React from "react";

/**
 * Create Room Button
 * Pulls up modal with form to create room
 * form takes name only (for now)
 * Button in form willredirect to new room
 */
function CreateRoom() {
  const createModal = document.getElementById('#create-modal')

  function toggleModal(){
    createModal.modal('show');
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-secondary "
        onClick={toggleModal}
      >Create Group</button>

      {/* Modal */}
      <div id="create-modal" class="modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal Form goes here.</p>
              <p>Name Room</p>
              <p>Room Passcode</p>
              <p>Study Deck</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateRoom;