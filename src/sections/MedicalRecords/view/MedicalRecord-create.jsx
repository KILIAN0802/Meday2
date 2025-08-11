'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Add as AddIcon } from '@mui/icons-material';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------

export function MedicalRecordsCreate() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 420 }}>
      <Button component={RouterLink} href = {paths.dashboard.MedicalRecords.chronic } variant="contained" startIcon={<AddIcon />} fullWidth>
        Tạo bệnh án mạn tính lần 1
      </Button>

      <Button omponent={RouterLink} href = {paths.dashboard.MedicalRecords.rechronic } variant="contained" color="secondary" startIcon={<AddIcon />} fullWidth>
        Tạo bệnh án mạn tính tái khám
      </Button>

      <Button omponent={RouterLink} href = {paths.dashboard.MedicalRecords.acute } variant="contained" color="warning" startIcon={<AddIcon />} fullWidth>
        Tạo bệnh án cấp tính
      </Button>
    </Box>
  );
}
