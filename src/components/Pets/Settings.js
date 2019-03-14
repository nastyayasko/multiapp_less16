import React from 'react';

function Settings (props) {
    const {handleInput} = props;

    return (
        <div className="settings">
          <div className="form-group row">
            <div className="col-sm-2">
              <select name="order" onChange={handleInput} className="form-control">
                <option value="no">Без</option>
                <option value="az">А-Я</option>
                <option value="za">Я-А</option>
              </select>
            </div>
            <div className="col-sm-10">
              <input type="text" placeholder="Поиск по имени" onInput={handleInput} className="form-control" name="search" />
            </div> 
          </div>
        </div>
    )
}

export default Settings;