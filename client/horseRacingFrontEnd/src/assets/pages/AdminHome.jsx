import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Races from './Races';
import AddRace from './AddRace';
import DeleteOwner from './DeleteOwner';
import MoveHorse from './MoveHorse';
import NewTrainer from './NewTrainer';
import Owners from './Owners';
import { Stables } from './Stables';
import Trainers from './Trainers';

const AdminHome = () => {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'addRace':
                return <AddRace />;
            case 'deleteOwner':
                return <DeleteOwner />;
            case 'moveHorse':
                return <MoveHorse />;
            case 'newTrainer':
                return <NewTrainer />;
            case 'races':
                return <Races />;
            case 'owners':
                return <Owners />;
            case 'stables':
                return <Stables />;
            case 'trainers':
                return <Trainers />;
            default:
                return <h2>Select an option to view details.</h2>;
        }
    };

    return (
      <div className="admin-layout-wrapper def_layout">
        <div className="admin-header column">
          <div className='row'>
            <button onClick={() => navigate('/guestHome')}>Guest</button>
          </div>
          <h1>Admin Home</h1>
          <div className='row'>
              <button onClick={() => setActiveComponent('addRace')}>Add Race</button>
              <button onClick={() => setActiveComponent('deleteOwner')}>Delete Owner</button>
              <button onClick={() => setActiveComponent('moveHorse')}>Move Horse</button>
              <button onClick={() => setActiveComponent('newTrainer')}>New Trainer</button>
          </div>
          <div className='row'>
              <button onClick={() => setActiveComponent('races')}>Races</button>
              <button onClick={() => setActiveComponent('owners')}>Owners</button>
              <button onClick={() => setActiveComponent('stables')}>Stables</button>
              <button onClick={() => setActiveComponent('trainers')}>Trainers</button>
          </div>
        </div>
        <div className="admin-content-scrollable">
          {renderComponent()}
        </div>
      </div>
    );
};

export default AdminHome;