// material-ui
import { Typography } from '@mui/material';
import StudentsTable from './StudentTable';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Students = () => (
    <MainCard title="Add New Orders">
        <Typography variant="body2">
            Welcome to the Orders section of the Goli Soda. This page is dedicated to create new orders.
        </Typography>
        <StudentsTable />
    </MainCard>
);

export default Students;
