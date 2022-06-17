import React from "react";

/**
 * Create Room Button
 * Pulls up modal with form to create room
 * form takes name only (for now)
 * Button in form willredirect to new room
 */
function CreateRoom() {
  const createModal = document.querySelector('#create-modal');


  // document.querySelector('#myModal').on('shown.bs.modal', function () {
  //   document.querySelector('#myInput').trigger('focus')
  // })

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-secondary "
        data-toggle="modal"
        data-target="#create-modal"
      >Create Group</button>

      {/* Modal */}
      <div id="create-modal" className="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal Form goes here.</p>
              <p>Name Room</p>
              <p>Room Passcode</p>
              <p>Study Deck</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary">Save changes</button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateRoom;