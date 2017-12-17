package com.hellokoding.account.util;

import com.dumbster.smtp.SimpleSmtpServer;
import com.dumbster.smtp.SmtpMessage;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileNotFoundException;
import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class SmtpClientTest {
    private static final Logger logger = LoggerFactory.getLogger(SmtpClientTest.class);
    private static final String HEADER_KEY_4_TO = "To";
    private static final String HEADER_KEY_4_SUBJECT = "Subject";

    @SuppressWarnings("unchecked")
    @Test
    public void testSendMessage() throws FileNotFoundException, IOException {

        logger.info("Start dumbster fake SMTP server...");
        int smtpPort = 12345;
        SimpleSmtpServer server = SimpleSmtpServer.start(12345);

        String subject = "MY_SUBJECT";
        String messageBody = "MY_MESSAGE_BODY";

        logger.info("Send mail message");
        String smtpHost = System
                .getProperty(SmtpClient.PROP_MAIL_SMTP_HOST, SmtpClient.DEFAULT_SMTP_HOST);

        String toAddr = "test@test.com";

        SmtpClient smtpClient = new SmtpClient(SmtpClient.getDefaultFromAddr(), toAddr, SmtpClient.createSession(smtpHost, smtpPort));
        smtpClient.sendMail(subject, messageBody);
        server.stop();

        assertEquals(1, server.getReceivedEmails().size());

        SmtpMessage email = server.getReceivedEmails().get(0);

        assertEquals(toAddr, email.getHeaderValue(HEADER_KEY_4_TO));
        assertEquals(subject, email.getHeaderValue(HEADER_KEY_4_SUBJECT));
        assertEquals(messageBody, email.getBody());
    }
}