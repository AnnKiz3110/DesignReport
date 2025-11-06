import React from "react";
import { useState } from 'react';
import { Tabs, Table, Card, DatePicker, Select, Input, Button, Space, Typography } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './App.css';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

function App() {
  const [activeTab, setActiveTab] = useState('summary');

  // ======================
  // 📦 DỮ LIỆU MẪU - SUMMARY
  // ======================
  const quotedContainersData = [
    { key: "1", stt: 1, unit: "CẢNG TÂN CẢNG - CÁT LÁI", quantity: 10 },
    { key: "2", stt: 2, unit: "CẢNG HIỆP PHƯỚC", quantity: 7 },
    { key: "3", stt: 3, unit: "CẢNG CÁT LÁI - KHU 3", quantity: 5 },
    { key: "4", stt: 4, unit: "CẢNG ICD PHÚC LONG", quantity: 2 },
    { key: "5", stt: 5, unit: "TỔNG CỘNG", quantity: 24, isTotal: true },
  ];

  const repairedContainersData = [
    { key: "1", stt: 1, unit: "CẢNG TÂN CẢNG - CÁT LÁI", quantity: 4, totalAmount: 69.82 },
    { key: "2", stt: 2, unit: "CẢNG HIỆP PHƯỚC", quantity: 3, totalAmount: 51.4 },
    { key: "3", stt: 3, unit: "CẢNG ICD PHÚC LONG", quantity: 1, totalAmount: 12.6 },
    { key: "4", stt: 4, unit: "TỔNG CỘNG", quantity: 8, totalAmount: 133.82, isTotal: true },
  ];

  const portErrorsData = [
    { key: "1", stt: 1, type: "TỔNG CONT REVISED", quantity: 4 },
    { key: "2", stt: 2, type: "TỔNG TIỀN REVISED", amount: 78.5, isTotal: true },
  ];

  // ======================
  // ⚙️ DỮ LIỆU MẪU - DETAIL
  // ======================
  const notRepairedData = [
    { key: "1", stt: 1, containerNo: "MAEU0611252", sentDate: "06-11-2025 09:21:48", vendorPrice: 3 },
    { key: "2", stt: 2, containerNo: "CMAU7834951", sentDate: "05-11-2025 13:18:22", vendorPrice: null },
    { key: "3", stt: 3, containerNo: "APZU7358912", sentDate: "04-11-2025 10:25:41", vendorPrice: 5 },
    { key: "4", stt: 4, containerNo: "OOLU7956137", sentDate: "03-11-2025 08:19:14", vendorPrice: 2 },
    { key: "5", stt: null, containerNo: "TỔNG CỘNG", vendorPrice: 10, isTotal: true },
  ];

  const transferredData = [
    { key: "1", stt: 1, containerNo: "MAEU0611251", sentDate: "06-11-2025 09:20:11", vendorPrice: 5 },
    { key: "2", stt: 2, containerNo: "SELU4194517", sentDate: "05-11-2025 11:43:27", vendorPrice: 10 },
    { key: "3", stt: 3, containerNo: "CMAU7844952", sentDate: "03-11-2025 17:28:54", vendorPrice: 7 },
    { key: "4", stt: 4, containerNo: "FFAU5387852", sentDate: "01-11-2025 10:24:21", vendorPrice: 14 },
    { key: "5", stt: 5, containerNo: "TEMU9362814", sentDate: "31-10-2025 18:51:11", vendorPrice: 8 },
    { key: "6", stt: null, containerNo: "TỔNG CỘNG", vendorPrice: 44, isTotal: true },
  ];

  const personalPaymentData = [
    { key: "1", stt: 1, containerNo: "MTSU9605348", cause: "Sai ghi chú", solution: "Nhân viên chịu trách nhiệm", price: 9 },
    { key: "2", stt: 2, containerNo: "APZU1248762", cause: "Giám định thiếu", solution: "NV kiểm tra lại quy trình", price: 5 },
    { key: "3", stt: null, containerNo: "TỔNG CỘNG", price: 14, isTotal: true },
  ];

  const adjustedPriceData = [
    { key: "1", stt: 1, containerNo: "CMAU3826741", sentDate: "03-11-2025 10:04:37", vendorPrice: 5, dhrPrice: 9 },
    { key: "2", stt: 2, containerNo: "SEGU7834212", sentDate: "02-11-2025 15:44:50", vendorPrice: 7, dhrPrice: 10 },
    { key: "3", stt: 3, containerNo: "TGHU9441183", sentDate: "01-11-2025 09:37:25", vendorPrice: 8, dhrPrice: 8 },
    { key: "4", stt: null, containerNo: "TỔNG CỘNG", dhrPrice: 27, isTotal: true },
  ];

  // ======================
  // 🧱 CẤU HÌNH CỘT BẢNG
  // ======================
  const quotedColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Đơn vị", dataIndex: "unit", render: (t, r) => <b>{t}</b> },
    { title: "Số lượng", dataIndex: "quantity", align: "right", render: (t, r) => <b>{t}</b> },
  ];

  const repairedColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Đơn vị", dataIndex: "unit", render: (t, r) => <b>{t}</b> },
    { title: "Số lượng", dataIndex: "quantity", align: "right", render: (t, r) => <b>{t}</b> },
    { title: "Tổng tiền (USD)", dataIndex: "totalAmount", align: "right", render: (t, r) => <b>{t}</b> },
  ];

  const portErrorsColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Loại", dataIndex: "type", render: (t, r) => <b>{t}</b> },
    { title: "Số lượng / Tiền", dataIndex: "quantity", align: "right", render: (t, r) => <b>{t || r.amount}</b> },
  ];

  const detailColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Số container", dataIndex: "containerNo", render: (t, r) => <b>{t}</b> },
    { title: "Ngày gửi", dataIndex: "sentDate" },
    { title: "Giá Vendor (USD)", dataIndex: "vendorPrice", align: "right", render: (t, r) => <b>{t}</b> },
  ];

  const personalPaymentColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Số container", dataIndex: "containerNo", render: (t, r) => <b>{t}</b> },
    { title: "Nguyên nhân", dataIndex: "cause" },
    { title: "Phương án xử lý", dataIndex: "solution" },
    { title: "Giá tiền (USD)", dataIndex: "price", align: "right", render: (t, r) => <b>{t}</b> },
  ];

  const adjustedPriceColumns = [
    { title: "STT", dataIndex: "stt", align: "center", width: 60, render: (t, r) => (r.isTotal ? "" : t) },
    { title: "Số container", dataIndex: "containerNo", render: (t, r) => <b>{t}</b> },
    { title: "Ngày gửi", dataIndex: "sentDate" },
    { title: "Giá Vendor (USD)", dataIndex: "vendorPrice", align: "right" },
    { title: "Giá DHR", dataIndex: "dhrPrice", align: "right", render: (t, r) => <b>{t}</b> },
  ];

  // ======================
  // 🧾 TAB NỘI DUNG
  // ======================
  const summaryTab = (
  <div className="tab-content">
    <div className="summary-grid">
      <Card className="summary-card" bordered={false}>
        <div className="card-header">
          <Text strong className="header-text">SỐ LƯỢNG CONT ĐÃ BÁO GIÁ</Text>
        </div>
        <Table
          columns={quotedColumns}
          dataSource={quotedContainersData}
          pagination={false}
          size="small"
          className="custom-table"
          rowClassName={record => record.isTotal ? 'total-row' : ''}
        />
      </Card>

      <Card className="summary-card" bordered={false}>
        <div className="card-header">
          <Text strong className="header-text">SỐ LƯỢNG CONT ĐÃ SỮA CHỮA</Text>
        </div>
        <Table
          columns={repairedColumns}
          dataSource={repairedContainersData}
          pagination={false}
          size="small"
          className="custom-table"
          rowClassName={record => record.isTotal ? 'total-row' : ''}
        />
      </Card>
    </div>

    <Card className="summary-card full-width" bordered={false} style={{ marginTop: 16 }}>
      <div className="card-header">
        <Text strong className="header-text">LỖI CẢNG GIÁM ĐỊNH SAU KHI KIỂM TRA, REVISED</Text>
      </div>
      <Table
        columns={portErrorsColumns}
        dataSource={portErrorsData}
        pagination={false}
        size="small"
        className="custom-table"
        rowClassName={record => record.isTotal ? 'total-row' : ''}
      />
    </Card>
  </div>
);


  const detailTab = (
    <div className="tab-content">
      <div className="detail-grid">
        <Card className="detail-card" bordered={false}>
          <div className="card-header">
            <Text strong className="header-text">SỐ LƯỢNG CONT KHÔNG CẦN SỮA: 4 conts</Text>
          </div>
          <Table
            columns={detailColumns}
            dataSource={notRepairedData}
            pagination={false}
            size="small"
            className="custom-table"
            rowClassName={(record) => record.isTotal ? 'total-row' : ''}
          />
        </Card>

        <Card className="detail-card" bordered={false}>
          <div className="card-header">
            <Text strong className="header-text">SỐ LƯỢNG CONT CHUYỂN HÃNG TÀU: 4 conts</Text>
          </div>
          <Table
            columns={detailColumns}
            dataSource={transferredData}
            pagination={false}
            size="small"
            className="custom-table"
            rowClassName={(record) => record.isTotal ? 'total-row' : ''}
          />
        </Card>
      </div>

      <Card className="detail-card full-width" bordered={false} style={{ marginTop: 16 }}>
        <div className="card-header">
          <Text strong className="header-text">SỐ LƯỢNG CONT DO CÁ NHÂN CHU TRÁCH NHIỆM (DO GHI CHÚ SAI VÀ GIÁM ĐỊNH THIẾU): 1 conts</Text>
        </div>
        <Table
          columns={personalPaymentColumns}
          dataSource={personalPaymentData}
          pagination={false}
          size="small"
          className="custom-table"
          rowClassName={(record) => record.isTotal ? 'total-row' : ''}
        />
      </Card>

      <Card className="detail-card full-width" bordered={false} style={{ marginTop: 16 }}>
        <div className="card-header">
          <Text strong className="header-text">SỐ LƯỢNG CONT CHỈNH LẠI GIÁ VÀ MỤC SỮA: 1 conts</Text>
        </div>
        <Table
          columns={adjustedPriceColumns}
          dataSource={adjustedPriceData}
          pagination={false}
          size="small"
          className="custom-table"
          rowClassName={(record) => record.isTotal ? 'total-row' : ''}
        />
      </Card>
    </div>
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Title level={3} style={{ margin: 0, color: 'white' }}>
            QUẢN LÝ SỮA CHỮA CONTAINER RỖNG (M&R)
          </Title>
        </div>
      </header>

      <div className="main-content">
     <Card className="filter-card" bordered={false}>
  <div className="filter-header">
    <Title level={4} className="filter-header-title">
      BÁO CÁO CUỐI THÁNG (DVR GỬI CHỈ HUY ĐỘI)
    </Title>
            </div>

          <div className="filter-section">
            <div className="filter-row">
              <div className="filter-item">
                <label>Từ ngày - Đến ngày</label>
                <RangePicker
                  style={{ width: '100%' }}
                  defaultValue={[dayjs('2025-10-30'), dayjs('2025-11-06')]}
                  format="DD-MM-YYYY"
                />
              </div>
              
              <div className="filter-item">
                <label>Chủ KT</label>
                <Select
                  placeholder="Chọn chủ KT"
                  style={{ width: '100%' }}
                  allowClear
                />
              </div>
            </div>

            <div className="filter-row">
              <div className="filter-item">
                <label>Số container</label>
                <Input placeholder="Nhập số container" />
              </div>

              <div className="filter-item">
                <label>Lỗi cảng <span style={{ color: 'red' }}>*</span></label>
                <Select
                  mode="multiple"
                  placeholder="Chọn lỗi cảng"
                  style={{ width: '100%' }}
                  defaultValue={['Chuyển hãng tàu', 'Từ chối', 'Cá nhân chi trả', 'Điều chỉnh']}
                />
              </div>
            </div>

            <div className="filter-row">
              <div className="filter-item full-width">
                <label>Đơn vị</label>
                <Select
                  mode="multiple"
                  placeholder="Chọn đơn vị"
                  style={{ width: '100%' }}
                  defaultValue={['CẢNG TÂN CẢNG - CÁT LÁI']}
                />
              </div>
            </div>

            <div className="filter-actions">
              <Button type="primary" icon={<SyncOutlined />}>
                NẠP DỮ LIỆU
              </Button>
            </div>
          </div>
        </Card>

        <Card className="content-card" bordered={false}>
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              {
                key: 'summary',
                label: 'Tổng kết',
                children: summaryTab,
              },
              {
                key: 'detail',
                label: 'Chi tiết',
                children: detailTab,
              },
            ]}
          />
        </Card>
      </div>

      <footer className="app-footer">
        <Text type="secondary">
          Version 1.0.0 Copyright © 2025 CEH MNR
        </Text>
      </footer>
    </div>
  );
}

export default App;
