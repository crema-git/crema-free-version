import { CustomizerItemWrapper, StyledToggleButton } from "../index.style";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeMode } from "@crema/constants/AppEnums";
import clsx from "clsx";
import {
  useThemeActionsContext,
  useThemeContext,
} from "@crema/context/AppContextProvider/ThemeContextProvider";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import {
  backgroundDark,
  backgroundLight,
  DarkSidebar,
  LightSidebar,
  textDark,
  textLight,
} from "@crema/constants/defaultConfig";
import IntlMessages from "@crema/helpers/IntlMessages";

const ThemeModes = () => {
  const { updateTheme, updateThemeMode } = useThemeActionsContext();
  const { updateSidebarColorSet } = useSidebarActionsContext();
  const { themeMode, theme } = useThemeContext();
  console.log("themeMode: ", themeMode);

  const onModeChange = (event, themeMode) => {
    console.log("themeMode: ", themeMode);
    console.log("event: ", event);
    if (themeMode) {
      updateThemeMode(themeMode);
      if (themeMode === ThemeMode.LIGHT) {
        updateSidebarColorSet({
          sidebarBgColor: LightSidebar.sidebarBgColor,
          sidebarTextColor: LightSidebar.sidebarTextColor,
          sidebarMenuSelectedBgColor: LightSidebar.sidebarMenuSelectedBgColor,
          sidebarMenuSelectedTextColor:
            LightSidebar.sidebarMenuSelectedTextColor,
          sidebarHeaderColor: LightSidebar.sidebarHeaderColor,
        });
      } else {
        updateSidebarColorSet({
          sidebarBgColor: DarkSidebar.sidebarBgColor,
          sidebarTextColor: DarkSidebar.sidebarTextColor,
          sidebarMenuSelectedBgColor: DarkSidebar.sidebarMenuSelectedBgColor,
          sidebarMenuSelectedTextColor:
            DarkSidebar.sidebarMenuSelectedTextColor,
          sidebarHeaderColor: DarkSidebar.sidebarHeaderColor,
        });
      }
      updateThemeMode(themeMode);
      updateTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: themeMode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
          background:
            themeMode === ThemeMode.DARK ? backgroundDark : backgroundLight,
          text: themeMode === ThemeMode.DARK ? textDark : textLight,
        },
      });
    }
  };

  return (
    <CustomizerItemWrapper>
      <Box component="h4" sx={{ mb: 2 }}>
        <IntlMessages id="customizer.themeMode" />
      </Box>
      <ToggleButtonGroup
        value={themeMode}
        exclusive
        onChange={onModeChange}
        aria-label="text alignment"
      >
        <StyledToggleButton
          value={ThemeMode.LIGHT}
          className={clsx({
            active: themeMode === ThemeMode.LIGHT,
          })}
          aria-label="left aligned"
        >
          <IntlMessages id="customizer.light" />
        </StyledToggleButton>

        <StyledToggleButton
          value={ThemeMode.DARK}
          className={clsx({
            active:
              themeMode === ThemeMode.DARK ||
              theme.palette.type === ThemeMode.DARK,
          })}
          aria-label="centered"
        >
          <IntlMessages id="customizer.dark" />
        </StyledToggleButton>
      </ToggleButtonGroup>
    </CustomizerItemWrapper>
  );
};

export default ThemeModes;
