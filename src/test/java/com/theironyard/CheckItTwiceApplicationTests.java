package com.theironyard;

import com.theironyard.services.GiftRepository;
import com.theironyard.services.RecipientRepository;
import com.theironyard.services.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CheckItTwiceApplication.class)
@WebAppConfiguration
public class CheckItTwiceApplicationTests {

	@Autowired
	UserRepository users;

	@Autowired
	RecipientRepository recipients;

	@Autowired
	GiftRepository gifts;

	@Autowired
	WebApplicationContext wap;

	MockMvc mockMvc;

	@Before
	public void before() {
		users.deleteAll();
		recipients.deleteAll();
		gifts.deleteAll();
		mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
	}

	@Test
	public void testLogin() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
					.param("username", "testUsername")
					.param("password", "testPassword")
		);

		Assert.assertTrue(users.count() == 0);
	}

	@Test
	public void testAddRecipient() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/add-recipient")
				.param("name", "testName")
				.param("BigDecimal", "20.00")
		);

		Assert.assertTrue(recipients.count() == 1);
	}

}
