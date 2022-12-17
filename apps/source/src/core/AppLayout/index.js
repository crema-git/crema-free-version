import React, {useEffect} from 'react';
import {useUrlSearchParams} from 'use-url-search-params';
import AppContentView from "@crema/components/AppContentView";
import generateRoutes from "@crema/utility/RouteGenerator";
import {Layouts} from '@crema/components/AppLayout';
import {useAuthUser} from "@crema/utility/AuthHooks";
import {useLayoutActionsContext, useLayoutContext} from "@crema/context/LayoutContextProvider";
import {useSidebarActionsContext} from "@crema/context/SidebarContextProvider";
import {anonymousStructure, authorizedStructure, unAuthorizedStructure} from "../AppRoutes";
import {useRoutes} from "react-router-dom";
import routesConfig from "../../app/routesConfig";

const AppLayout = () => {
    const {navStyle} = useLayoutContext();

    const {user, isAuthenticated} = useAuthUser();
    const {updateNavStyle} = useLayoutActionsContext();
    const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
    const AppLayout = Layouts[navStyle];
    const [params] = useUrlSearchParams();
    const generatedRoutes=generateRoutes({
        isAuthenticated: isAuthenticated,
        userRole: user?.role,
        unAuthorizedStructure,
        authorizedStructure,
        anonymousStructure,
    })
    const routes = useRoutes(generatedRoutes)
    useEffect(() => {
        if (params.layout) updateNavStyle(params.layout);
        if (params.menuStyle) updateMenuStyle(params.menuStyle);
        if (params.sidebarImage) setSidebarBgImage(true);
    }, [
        params.layout,
        params.menuStyle,
        params.sidebarImage,
        updateNavStyle,
        updateMenuStyle,
        setSidebarBgImage,
    ]);

    return (
        <>
            {isAuthenticated ? (
                <AppLayout routes={routes} routesConfig={routesConfig}/>
            ) : (
                <AppContentView routes={routes} />
            )}
        </>
    );
};

export default AppLayout;
