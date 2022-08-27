import React, {FC} from 'react';
import {Stack} from "@mui/material";
import FlavorSelect from "./FlavorSelect";

interface FlavorSelectListProps {
    colorTop: string;
    colorMiddle: string;
    colorBottom: string;

    onChangeTop: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMiddle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeBottom: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const FlavorSelectList:FC<FlavorSelectListProps> = ({colorTop,colorBottom,colorMiddle,onChangeBottom,onChangeMiddle,onChangeTop}) => (
    <Stack>
       <FlavorSelect value={colorTop} onChange={onChangeTop}/>
       <FlavorSelect value={colorMiddle} onChange={onChangeMiddle}/>
       <FlavorSelect value={colorBottom} onChange={onChangeBottom}/>
    </Stack>
);

export default FlavorSelectList;
