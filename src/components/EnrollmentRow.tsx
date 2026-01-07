import React from "react";
import { TableRow, TableCell, Button, Chip } from "@mui/material";
import type { Enrollment, EnrollmentStatus } from "../types/enrollment";

type Props = {
    enrollment: Enrollment;
    onConfirm: (id: string) => void;
};

const getStatusColor = (
    status: EnrollmentStatus
  ): 'success' | 'warning' | 'error' | 'default' => {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

export const EnrollmentRow: React.FC<Props> = ({ enrollment, onConfirm }) => {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell component="th" scope="row">
                {enrollment.student_name}
            </TableCell>
            <TableCell>{enrollment.email}</TableCell>
            <TableCell>{enrollment.workshop}</TableCell>
            <TableCell>
                <Chip
                    label={enrollment.status}
                    color={getStatusColor(enrollment.status)}
                    size="small"
                />
            </TableCell>
            <TableCell>{enrollment.created_at.toLocaleDateString()}</TableCell>
            <TableCell>
                {enrollment.status === 'pending' && (
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => onConfirm(enrollment.id)}
                    >
                        Confirm
                    </Button>
                )}
            </TableCell>
        </TableRow>
    )
}