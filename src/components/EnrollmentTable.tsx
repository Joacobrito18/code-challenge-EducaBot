import React from 'react';
import { EnrollmentRow } from './EnrollmentRow';
import type {Enrollment} from '../types/enrollment';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from '@mui/material';

type Props = {
    enrollments: Enrollment[];
    onConfirm: (id: string) => void;
};

export const EnrollmentTable: React.FC<Props> = ({ enrollments, onConfirm }) => {
    if (!enrollments || enrollments.length === 0) {
        return (
            <Box sx={{ minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography>No enrollments found.</Typography>
            </Box>
          );
    }

return (
    <TableContainer component={Paper} sx={{ minHeight: 400 }}>
        <Table sx={{ minWidth: 650 }} aria-label="enrollments table" >
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Workshop</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {enrollments.map((enrollment) => (
                    <EnrollmentRow
                        key={enrollment.id}
                        enrollment={enrollment}
                        onConfirm={onConfirm}
                    />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
}