import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppAnimate from '@crema/components/AppAnimate';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import { Header, ItemList } from '@crema/modules/ecommerce/Invoice2';
import { invoiceData } from '@crema/fakedb/extraPages';

const Invoice2 = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1, maxWidth: 900, width: '100%' }}>
          <Card
            sx={{
              p: { xs: 6, xl: 8 },
              minHeight: 1000,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header />
            <Box sx={{ mb: 5 }}>
              <AppTableContainer>
                <ItemList />
              </AppTableContainer>
            </Box>

            <Box
              sx={{
                mt: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { sm: 'space-between' },
                borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
                pt: 4,
              }}
            >
              <Box>
                <Box
                  component='h4'
                  sx={{
                    mb: { xs: 3, lg: 4 },
                    color: 'text.secondary',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: Fonts.REGULAR,
                  }}
                >
                  <IntlMessages id='invoice.thankYou' />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AppTableContainer
                  sxStyle={{
                    width: { xs: 'auto', sm: '100%' },
                  }}
                >
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          colSpan='3'
                          component='th'
                          scope='row'
                          sx={{ border: '0 none', p: 1.5 }}
                        >
                          <Box
                            sx={{
                              textAlign: 'right',
                              mr: 10,
                              color: 'text.secondary',
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            <IntlMessages id='invoice.subTotal' />
                          </Box>
                        </TableCell>
                        <TableCell sx={{ border: '0 none', p: 1.5 }}>
                          <Box
                            sx={{
                              color: 'text.primary',
                              textAlign: 'right',
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            ${invoiceData.subTotal}
                          </Box>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          colSpan='3'
                          component='th'
                          scope='row'
                          sx={{ border: '0 none', p: 1.5 }}
                        >
                          <Box
                            sx={{
                              color: 'text.secondary',
                              textAlign: 'right',
                              mr: 10,
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            <IntlMessages id='invoice.rebate' />
                          </Box>
                        </TableCell>
                        <TableCell sx={{ border: '0 none', p: 1.5 }}>
                          <Box
                            sx={{
                              color: 'text.primary',
                              textAlign: 'right',
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            ${invoiceData.rebate}
                          </Box>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          colSpan='3'
                          component='th'
                          scope='row'
                          sx={{ border: '0 none', p: 1.5 }}
                        >
                          <Box
                            sx={{
                              color: 'text.secondary',
                              textAlign: 'right',
                              mr: 10,
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            <IntlMessages id='invoice.grandTotal' />
                          </Box>
                        </TableCell>
                        <TableCell sx={{ border: '0 none', p: 1.5 }}>
                          <Box
                            sx={{
                              color: 'text.primary',
                              textAlign: 'right',
                              fontSize: 13,
                              fontWeight: Fonts.MEDIUM,
                            }}
                          >
                            ${invoiceData.total}
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AppTableContainer>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Invoice2;
