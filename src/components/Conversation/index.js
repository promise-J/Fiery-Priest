import {
  Box,
  Stack,
} from "@mui/material";
import {
} from "phosphor-react";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";




const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
