import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack5';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@material-ui/lab';
import { Box, Card, Grid, Stack, TextField } from '@material-ui/core';
// utils
// routes
//
import { postData, putData } from 'src/_helper/httpProvider';
import { API_BASE_URL } from 'src/config/configUrl';
import { Icon } from '@iconify/react';
import { MIconButton } from 'src/components/@material-extend';
import closeFill from '@iconify/icons-eva/close-fill';

// ----------------------------------------------------------------------

TacGiaNewForm.propTypes = {
  isEdit: PropTypes.bool,
  current: PropTypes.object,
  id: PropTypes.string,
  setEdit: PropTypes.func,
  setLoad: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function TacGiaNewForm({ isEdit, current, setEdit, setLoad }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const NewSchema = Yup.object().shape({
    tg_ten: Yup.string().required('Vui lòng nhập tên'),
    tg_email: Yup.string()
      .required('Vui lòng nhập địa chỉ email')
      .email('Địa chỉ email không hợp lệ'),
    tg_phone: Yup.string().required('Vui lòng nhập số điện thoại'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tg_ten: current?.tg_ten || '',
      tg_email: current?.tg_email || '',
      tg_phone: current?.tg_phone || '',
    },
    validationSchema: NewSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (isEdit) {
          await putData(API_BASE_URL + `/tacgia/${current.id}/edit`, values);
          if (setEdit) setEdit({ isEdit: false, current: {} });
        } else {
          await postData(API_BASE_URL + `/tacgia/create`, values);
          resetForm();
        }
        if (setLoad) setLoad((e) => e + 1);
        enqueueSnackbar(
          !isEdit ? 'Thêm chủ sở hữu thành công' : 'Cập nhật chủ sở hữu thành công!',
          {
            variant: 'success',
          },
        );
      } catch (error) {
        console.error(error);
        enqueueSnackbar(error.response.data, {
          variant: 'error',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        });
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Tên chủ sở hữu"
                  {...getFieldProps('tg_ten')}
                  error={Boolean(touched.tg_ten && errors.tg_ten)}
                  helperText={touched.tg_ten && errors.tg_ten}
                />
                <TextField
                  fullWidth
                  label="Email"
                  {...getFieldProps('tg_email')}
                  error={Boolean(touched.tg_email && errors.tg_email)}
                  helperText={touched.tg_email && errors.tg_email}
                />
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  {...getFieldProps('tg_phone')}
                  error={Boolean(touched.tg_phone && errors.tg_phone)}
                  helperText={touched.tg_phone && errors.tg_phone}
                />
                <Box
                  sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <LoadingButton type="submit" variant="contained">
                    {!isEdit ? 'Thêm' : 'Lưu'}
                  </LoadingButton>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
