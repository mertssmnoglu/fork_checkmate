import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import Arrow from "../../../assets/icons/top-right-arrow.svg?react";
import background from "../../../assets/Images/background-grid.svg";
import ClockSnooze from "../../../assets/icons/clock-snooze.svg?react";

const StatusBox = ({ title, value }) => {
  const theme = useTheme();

  let sharedStyles = { position: "absolute", right: 8, opacity: 0.5 };

  let color;
  let icon;
  if (title === "up") {
    color = theme.pie.green.stroke;
    icon = (
      <Box sx={{ ...sharedStyles, top: 8 }}>
        <Arrow />
      </Box>
    );
  } else if (title === "down") {
    color = theme.pie.red.stroke;
    icon = (
      <Box sx={{ ...sharedStyles, transform: "rotate(180deg)", top: 5 }}>
        <Arrow />
      </Box>
    );
  } else if (title === "paused") {
    color = theme.pie.yellow.stroke;
    icon = (
      <Box sx={{ ...sharedStyles, top: 12, right: 12 }}>
        <ClockSnooze />
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      flex={1}
      border={1}
      borderColor={theme.palette.otherColors.graishWhite}
      borderRadius={`${theme.shape.borderRadius}px`}
      backgroundColor={theme.palette.otherColors.white}
      px={theme.gap.large}
      py={theme.gap.ml}
      overflow="hidden"
      sx={{
        "&:hover": {
          backgroundColor: "#f9fafb",
        },
        "&:after": {
          position: "absolute",
          content: `""`,
          backgroundImage: `url(${background})`,
          width: "400px",
          height: "200px",
          top: "-10%",
          left: "5%",
          zIndex: 10000,
          pointerEvents: "none",
        },
      }}
    >
      <Box
        textTransform="uppercase"
        fontSize={15}
        letterSpacing={0.5}
        color={theme.palette.otherColors.bluishGray}
        mb={theme.gap.ml}
        sx={{ opacity: 0.6 }}
      >
        {title}
      </Box>
      {icon}
      <Stack
        direction="row"
        alignItems="flex-start"
        fontSize={36}
        fontWeight={600}
        color={color}
        gap="2px"
      >
        {value}
        <Typography
          component="span"
          fontSize={20}
          fontWeight={300}
          color={theme.palette.otherColors.bluishGray}
          sx={{ opacity: 0.3 }}
        >
          #
        </Typography>
      </Stack>
    </Box>
  );
};

StatusBox.propTypes = {
  title: PropTypes.oneOf(["up", "down", "paused"]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default StatusBox;