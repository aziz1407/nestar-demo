import { Box, Divider, Stack, Typography } from "@mui/material"




const TopAgentCard = () => {
    return (
        <Stack className={'top-agent-card'}>
            <Box>
                <div>
                    <img src="img/profile/girl.svg" />
                </div>
            </Box>
            <Box className={'info'}>
            <strong className={"title"}>Martin</strong>
                <span>Agent</span>
            </Box>
        </Stack>
    );
};


export default TopAgentCard;
