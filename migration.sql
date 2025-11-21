CREATE TABLE IF NOT EXISTS contact_requests
(
    id         UUID PRIMARY KEY                     DEFAULT gen_random_uuid(),
    first_name VARCHAR(50)                 NOT NULL,
    last_name  VARCHAR(50)                 NOT NULL,
    email      VARCHAR(100) UNIQUE         NOT NULL,
    message    TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE launch_subscribers
(
    id                UUID PRIMARY KEY             DEFAULT gen_random_uuid(),
    first_name        VARCHAR(100)        NOT NULL,
    last_name         VARCHAR(100)        NOT NULL,
    email             VARCHAR(255) UNIQUE NOT NULL CHECK (email LIKE '%@%._%'),
    project_name      VARCHAR(255)        NOT NULL,
    created_at        TIMESTAMP WITH TIME ZONE     DEFAULT CURRENT_TIMESTAMP,
    notification_sent BOOLEAN             NOT NULL DEFAULT FALSE
);

CREATE INDEX idx_launch_subscribers_email ON launch_subscribers (email);