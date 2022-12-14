import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@material-ui/core';
// redux
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { API_BASE_URL } from 'src/config/configUrl';
import { getData } from 'src/_helper/httpProvider';
import BookNewForm from 'src/components/_dashboard/book/BookNewForm';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();
  const { pathname } = useLocation();
  const { id } = useParams();
  const isEdit = pathname.includes('edit');
  const [current, setCurrent] = useState({});

  useEffect(() => {
    (async () => {
      if (isEdit) {
        const _res = await getData(API_BASE_URL + `/book/${id}`);
        setCurrent(_res.data);
        console.log(_res.data);
      }
    })();
  }, [id,  isEdit]);

  return (
    <Page title="Dự án | Delta">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Thêm dự án' : 'Chỉnh sửa'}
          links={[
            { name: 'Quản lý', href: PATH_DASHBOARD.root },
            { name: 'Dự án', href: PATH_DASHBOARD.book.root },
            { name: !isEdit ? 'Thêm dự án' : id },
          ]}
        />

        <BookNewForm isEdit={isEdit} currentProduct={current} id={id} />
      </Container>
    </Page>
  );
}
