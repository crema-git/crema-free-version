import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import Typography from "@mui/material/Typography";
import FooterWrapper from "./FooterWrapper";
import dayjs from "dayjs";

const AppFixedFooter = () => {
  const { footer, footerType } = useLayoutContext();

  return (
    <>
      {footer && footerType === "fixed" ? (
        <FooterWrapper className="footer fixed-footer">
          <div className="footerContainer">
            <Typography>Copy right @crema {dayjs().year()}</Typography>
            <Box sx={{ ml: "auto" }}>
              For full version <Button color="primary">Buy Now</Button>
            </Box>
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFixedFooter;
