import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const FilterSearch: React.FC<Props> = ({ value, onChange }) => {
    return (
      <TextField
        placeholder="Search by name or email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    );
  };