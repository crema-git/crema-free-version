import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Grid } from '@mui/material';
import {
  AverageGrades,
  CourseCategories,
  CourseDetail,
  GeneralStats,
  LatestResults,
  MyClass,
  MyCourses,
  MyLearning,
  MyProfile,
  Notifications,
  PromoCard,
  RelatedCourses,
  StudentRankings,
  VideoPromo,
} from '@crema/modules/dashboards/Academy';
import { useDispatch, useSelector } from 'react-redux';
import { onGetAcademyData } from '../../../toolkit/actions';
import AppLoader from '@crema/components/AppLoader';

const Academy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAcademyData());
  }, [dispatch]);

  const { academyData } = useSelector(({ dashboard }) => dashboard);
  console.log('academyData', academyData);
  return academyData ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <Box
          sx={{
            pb: { xs: 5, md: 8 },
          }}
        >
          <AppGridContainer>
            {academyData.academicStats.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <GeneralStats stats={item} />
              </Grid>
            ))}

            {academyData.courseCategories.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <CourseCategories course={item} />
              </Grid>
            ))}
          </AppGridContainer>
        </Box>

        <Box
          sx={{
            pb: { xs: 5, md: 8 },
          }}
        >
          <AppGridContainer>
            <Grid item xs={12} sm={6} lg={3}>
              <MyProfile profile={academyData.profile} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{
                order: { lg: 2 },
              }}
            >
              <Notifications notifications={academyData.notifications} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              sx={{
                order: { lg: 1 },
              }}
            >
              <MyCourses courses={academyData.courses} />
            </Grid>
          </AppGridContainer>
        </Box>

        <AppGridContainer>
          {academyData.courseDetails.map((item, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
              <CourseDetail course={item} />
            </Grid>
          ))}

          <Grid item xs={12} sm={12} md={5} xl={6}>
            <VideoPromo videoPromo={academyData.videoPromo} />
          </Grid>

          <Grid item xs={12} sm={12} md={7} xl={6}>
            <AppGridContainer>
              <Grid item xs={12} sm={12} md={12}>
                <MyLearning learningData={academyData.learningData} />
              </Grid>

              <Grid item xs={12} sm={6} xl={6}>
                <LatestResults latestResults={academyData.latestResults} />
              </Grid>

              <Grid item xs={12} sm={6} xl={6}>
                <MyClass classData={academyData.classData} />
              </Grid>
            </AppGridContainer>
          </Grid>

          <Grid item xs={12} sm={12} md={9}>
            <StudentRankings studentRankings={academyData.studentRankings} />
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <PromoCard />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <AverageGrades grades={academyData.grades} />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <RelatedCourses relatedCourses={academyData.relatedCourses} />
          </Grid>
        </AppGridContainer>
      </Box>
    </AppAnimate>
  ) : (
    <AppLoader />
  );
};

export default Academy;
