import React, {FC} from 'react';

interface FlavorSelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const labelStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '24px',
    border: 'solid 2px #fff',
    display: 'block',
    overflow: 'hidden',
    margin: '30px',
    boxShadow: '#000 0 0 14px'
}

const inputStyle = {
    height: '60px',
    width: '60px',
    marginTop: '-10px',
    marginLeft: '-10px',
    cursor: 'pointer'
}
const FlavorSelect: FC<FlavorSelectProps> = ({value, onChange}) => (
    <label style={labelStyle}>
        <input style={inputStyle} type="color" onChange={onChange} value={value}/>
    </label>
);

export default FlavorSelect;
