import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
    open: boolean
}

export default function LoadingScreen(props: Props) {
    return (
        <Backdrop
          sx={{ color: '#fff', background: '#000000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.open}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
    )
}