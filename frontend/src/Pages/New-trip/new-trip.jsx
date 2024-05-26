import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Space,
  DatePicker,
  InputNumber,
  Select,
  Flex,
  Radio,
} from "antd";
import Footer from "../Footer.jsx";

const { Option } = Select;
const { RangePicker } = DatePicker;

const SelectFormItem = ({ name, placeholder, options }) => (
  <Form.Item name={name} style={{ width: 350 }}>
    <Select placeholder={placeholder}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

const onFinish = (values) => {
  console.log("Received values of form:", values);
};

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 8 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 12 },
  },
};

export default function NewTrip() {
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleNumberOfPeopleChange = (value) => {
    setNumberOfPeople(value);
  };

  return (
    <>
      <section id="form-new-trip" className="form--section">
        <h3 className="form--title">Plan your next adventure</h3>
        <Form
          // {...layout}
          layout="vertical"
          name="dynamic_form_new_trip"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
          // size="middle"
        >
          <Form.Item>
            <p className="form--prompt">Where do you want to go?</p>
            <Space className="form--space">
              <SelectFormItem
                name="Select a city"
                placeholder="Select a city"
                options={[
                  { value: "HCM", label: "Ho Chi Minh" },
                  { value: "HN", label: "Ha Noi" },
                  { value: "HA", label: "Hoi An" },
                ]}
              />
              <Form.Item>
                <RangePicker />
              </Form.Item>
            </Space>

            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key}>
                      <p className="form--prompt">Going next to:</p>
                      <Space style={{ marginBottom: 8 }} align="baseline">
                        <Form.Item
                          name="Select your budget"
                          style={{ width: 350 }}
                        >
                          <Select placeholder="Select a city">
                            <Option value="HCM">Ho Chi Minh</Option>
                            <Option value="HN">Ha Noi</Option>
                            <Option value="HA">Hoi An</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <RangePicker />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add destination
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item>
            <p className="form--prompt">How many people are going?</p>
            <InputNumber
              placeholder="Enter number of people"
              style={{
                width: "100%",
              }}
              min={1}
              onChange={handleNumberOfPeopleChange}
            />
          </Form.Item>

          {numberOfPeople >= 2 && (
            <Form.Item>
              <p className="form--prompt">Who is traveling with you?</p>
              <Flex align="flex-start">
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value="couple">Couple</Radio.Button>
                  <Radio.Button value="friends">Friends</Radio.Button>
                  <Radio.Button value="family">Family</Radio.Button>
                </Radio.Group>
              </Flex>
            </Form.Item>
          )}

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <p className="form--prompt">
              * How much do you plan to spend on this trip?(Optional)
            </p>
            <Select placeholder="Select your budget">
              <Option value="male">None</Option>
              <Option value="female">Less than 500 USD</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <p className="form--prompt">
              * Are you traveling for a special occasion? (Optional)
            </p>
            <Select placeholder="Select your occasion">
              <Option value="male">None</Option>
              <Option value="female">Less than 500 USD</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{
              marginTop: 50,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create New Trip
            </Button>
          </Form.Item>
        </Form>
      </section>
      <Footer />
    </>
  );
}
