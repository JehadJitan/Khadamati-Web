import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        title: 'وزارة الصحة',
        path: '/DB/MinistryOfHealth',
        icon: <GiIcons.GiHealthNormal />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'الموظفين',
                path: '/DB/MinistryOfHealth/employees',
                icon: <BsIcons.BsFillPersonFill />,
            },
            {
                title: 'الخدمات',
                path: '/DB/MinistryOfHealth/services',
                icon: <MdIcons.MdOutlineMiscellaneousServices />,
            },
            {
                title: 'التقارير',
                path: '/DB/MinistryOfHealth/reports',
                icon: <HiIcons.HiDocumentReport />,
            }
        ]
    },
    {
        title: 'وزارة المالية',
        path: '/DB/MinistryOfFinance',
        icon: <RiIcons.RiBankCard2Fill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'الموظفين',
                path: '/DB/MinistryOfFinance/employees',
                icon: <BsIcons.BsFillPersonFill />,
            },
            {
                title: 'الخدمات',
                path: '/DB/MinistryOfFinance/services',
                icon: <MdIcons.MdOutlineMiscellaneousServices />,
            },
            {
                title: 'التقارير',
                path: '/DB/MinistryOfFinance/reports',
                icon: <HiIcons.HiDocumentReport />,
            }
        ]
    },
    {
        title: 'وزارة المواصلات',
        path: '/DB/MinistryOfTransportation',
        icon: <AiIcons.AiFillCar />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'الموظفين',
                path: '/DB/MinistryOfTransportation/employees',
                icon: <BsIcons.BsFillPersonFill />,
            },
            {
                title: 'الخدمات',
                path: '/DB/MinistryOfTransportation/services',
                icon: <MdIcons.MdOutlineMiscellaneousServices />,
            },
            {
                title: 'التقارير',
                path: '/DB/MinistryOfTransportation/reports',
                icon: <HiIcons.HiDocumentReport />,
            }
        ]
    },
    {
        title: 'وزارة الداخلية',
        path: '/DB/MinistryOfInteriorAffairs',
        icon: <HiIcons.HiIdentification />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'الموظفين',
                path: '/DB/MinistryOfInteriorAffairs/employees',
                icon: <BsIcons.BsFillPersonFill />,
            },
            {
                title: 'الخدمات',
                path: '/DB/MinistryOfInteriorAffairs/services',
                icon: <MdIcons.MdOutlineMiscellaneousServices />,
            },
            {
                title: 'التقارير',
                path: '/DB/MinistryOfInteriorAffairs/reports',
                icon: <HiIcons.HiDocumentReport />,
            }
        ]
    },
    {
        title: 'وزارة الأملاك والأراضي',
        path: '/DB/MinistryOfLandMark',
        icon: <FaIcons.FaLandmark />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'الموظفين',
                path: '/DB/MinistryOfLandMark/employees',
                icon: <BsIcons.BsFillPersonFill />,
            },
            {
                title: 'الخدمات',
                path: '/DB/MinistryOfLandMark/services',
                icon: <MdIcons.MdOutlineMiscellaneousServices />,
            },
            {
                title: 'التقارير',
                path: '/DB/MinistryOfLandMark/reports',
                icon: <HiIcons.HiDocumentReport />,
            }
        ]
    },
    {
        title: 'عن النظام',
        path: '/DB/about',
        icon: <FcIcons.FcAbout />
    },
    {
        title: 'تسجيل الخروج',
        path: '/',
        icon: <RiIcons.RiLogoutBoxFill />
    }

];