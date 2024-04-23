CREATE TABLE data (
    oh_id VARCHAR(255) NOT NULL,
    queue INTEGER DEFAULT 0,
    constant VARCHAR(255)
);

INSERT INTO data (oh_id, queue, constant) VALUES ('cs223', 10, '5.4');
