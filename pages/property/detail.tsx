import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  const device = useDeviceDetect();

  if(device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>
  } else {
    return <Stack>PROPERTY DETAIL</Stack>
  }
}

export default withLayoutBasic(PropertyDetail);