/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import Sidemenu from "./Sidemenu";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Union(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="0px"
      height="0px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="180px"
        height="800px"
        pathData="M180 0L0 0L0 180L0 224L0 800L180 800L180 0Z"
        viewBox={{ minX: 0, minY: 0, width: 180, height: 800 }}
        color="rgba(28.000000230968,34.00000177323818,44.000001177191734,1)"
        position="absolute"
        top="NaN%"
        bottom="-Infinity%"
        left="NaN%"
        right="-Infinity%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      >
        {/* <Sidemenu
          position="absolute"
          top="NaN%"
          bottom="-Infinity%"
          left="NaN%"
          right="-Infinity%"
          {...getOverrideProps(overrides, "View.Icon[0].Sidemenu[0]")}
        ></Sidemenu> */}
      </Icon>
    </View>
  );
}
