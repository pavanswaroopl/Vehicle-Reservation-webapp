package com.cognizant.vehicleregister;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cognizant.vehicleregister.security.JwtAuthorizationFilter;
import com.cognizant.vehicleregister.service.AppUserDetailsService;



import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;



@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleRegisterApplication.class);

	@Autowired
	private AppUserDetailsService appUserDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// auth.userDetailsService(inMemoryUserDetailsManager());
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());

	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		LOGGER.info("Start");
		return new BCryptPasswordEncoder();
	}

	@SuppressWarnings("rawtypes")
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		httpSecurity.cors();
		/*httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/users").permitAll()
				.anyRequest();*/
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/vehicle").permitAll()
				.anyRequest().authenticated().and().addFilter(new JwtAuthorizationFilter(authenticationManager()));

		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/authenticate")
				.hasAnyRole("USER", "ADMIN").anyRequest().authenticated().and()
				.addFilter(new JwtAuthorizationFilter(authenticationManager()));

	}


}
