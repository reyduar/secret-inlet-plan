package com.si.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ApiController {
	
	@GetMapping("/")
	public String showIndexPage(){
		return "index";
	}

}
