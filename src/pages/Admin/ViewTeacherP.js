import React from 'react';
import ASidebar from '../../components/Admin/ASidebar/ASidebar';
import ATopbar from '../../components/Admin/ATopbar/ATopbar';
import { Helmet } from 'react-helmet';
import ViewTeacherpform from '../../components/Admin/ViewTeacherpform/ViewTeacherpform';

export default function ViewTeacherP() {
  return (
    <div>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <ViewTeacherpform/>
    </div>
  )
}
