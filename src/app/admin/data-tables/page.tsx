'use client'
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
import ColumnsTable from 'components/admin/main/applications/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/main/applications/data-tables/ComplexTable';
import DevelopmentTable from 'components/admin/main/applications/data-tables/DevelopmentTable';
import tableDataColumns from 'variables/applications/data-tables/tableDataColumns';
import tableDataComplex from 'variables/applications/data-tables/tableDataComplex';
import tableDataDevelopment from 'variables/applications/data-tables/tableDataDevelopment';
import tableDataCheck from 'variables/dashboards/rtl/tableDataCheck';
import CheckTable from "../../../../../components/rtl/dashboard/CheckTable";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
        <ColumnsTable tableData={tableDataColumns} />
        <ComplexTable tableData={tableDataComplex} />
      </SimpleGrid>
    </Box>
  );
}
