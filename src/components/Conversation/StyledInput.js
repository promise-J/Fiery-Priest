import { TextField } from '@mui/material';
import {styled} from '@mui/material/styles'

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px",
      paddingBottom: "12px",
    },
  }));

export default StyledInput