/**
 * Copyright (c) 2013 ADTECH. All rights reserved.
 *
 **/
package com.hellokoding.account.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Properties;

/**
 *
 * SMTP client for sending emails.
 *
 */
public class SmtpClient {

    private static final Logger logger = LoggerFactory.getLogger(SmtpClient.class);

    public static final String DEFAULT_SMTP_HOST = "127.0.0.1";
    public static final String DEFAULT_SMTP_PORT = "25";

    public static final String PROP_MAIL_SMTP_HOST = "mail.smtp.host";
    public static final String PROP_MAIL_SMTP_PORT = "mail.smtp.port";

    private static final String PROP_SYSTEM_USER_NAME = "user.name";
    private static final String DEFAULT_HOSTNAME = "localhost";

    private Session session;

    private String from;

    private String to;

    /**
     * Constructor.
     *
     * @param from the sender email address
     * @param to the receiver email address
     * @param session the javax.mail.Session object
     */
    public SmtpClient(String from, String to, Session session) {
        this.from = from;
        this.to = to;
        this.session = session;
    }

    /**
     * Constructs a well-formed sender email address using the username and hostname of the local
     * system.
     *
     * @return the constructed sender email address
     */
    public static String getDefaultFromAddr() {
        String username = System.getProperty(PROP_SYSTEM_USER_NAME);

        String hostname = null;
        try {
            hostname = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            hostname = DEFAULT_HOSTNAME;
            logger.warn("Error retrieving email sending host name, using default: " + hostname, e);
        }

        String from = username + "@" + hostname;
        return from;
    }

    public static Session createSession(String smtpHost, int smtpPort) {
        Properties properties = new Properties();

        properties.setProperty(PROP_MAIL_SMTP_HOST, smtpHost);
        properties.setProperty(PROP_MAIL_SMTP_PORT, String.valueOf(smtpPort));

        Session session = Session.getInstance(properties);
        if (session == null) {
            throw new NullPointerException("SMTP session is null");
        } else {
            return session;
        }
    }

    /**
     * Sends an email.
     *
     * @param subject the subject
     * @param messageBody the email body
     */
    public void sendMail(String subject, String messageBody) {
        try {
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(from));

            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            message.setSubject(subject);

            message.setText(messageBody);

            Transport.send(message);
        } catch (MessagingException e) {
            logger.error("Error sending mail: " + subject, e);
        }
    }
}
