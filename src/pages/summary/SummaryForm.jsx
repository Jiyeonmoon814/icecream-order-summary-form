import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SummaryForm = () => {
  const [tcChecked, setTcCheckecd] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <sapn style={{ color: "blue" }}> Terms and Conditions</sapn>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcCheckecd(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};
