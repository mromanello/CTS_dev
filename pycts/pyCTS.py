class BadCtsUrnSyntax(Exception):
	"""docstring for BadCtsUrnSyntax"""
	pass

class CTS_URN(object):
	"""
	docstring for CTS_URN
	
	This class is basically a port of <https://bitbucket.org/neelsmith/cts/src/9932c604928f77f311b0d679b5f724097548f86d/src/edu/harvard/chs/cts3/CtsUrn.groovy?at=default>
	for Python.
	
	>>> urn_string = "urn:cts:greekLit:tlg0003.tlg001"
	>>> urn = CTS_URN(urn_string)
	
	"""
	def __init__(self,inp_string):
		self._as_string  = inp_string
		self._cts_namespace = None
		self._passage_component = None
		self._work_component = None
		self._version = None
		self._work = None
		self._textgroup = None
		
		try:
			self._initialize_URN(inp_string)
		except Exception, e:
			raise e
	
	@property
	def passage_component(self):
		"""docstring for passage_component"""
		return self._passage_component
	
	@property
	def work_component(self):
		"""docstring for work_component"""
		return self._work_component
	
	@property
	def cts_namespace(self):
		"""docstring for fname"""
		return self._cts_namespace
	
	@property
	def version(self):
		"""docstring for version"""
		return self._version
	
	@property
	def work(self):
		"""docstring for work"""
		return self._work
	
	@property
	def textgroup(self):
		"""docstring for textgroup"""
		return self._textgroup
	
	def _initialize_URN(self,urn_string):
		"""
		docstring for initialize_URN
		
		>>> bogus_string = "abc:def"
		>>> bogus_urn = CTS_URN(bogus_string)
		
		"""
		components = urn_string.split(":")
		try:
			assert components[0]=="urn" and components[1]=="cts"
		except Exception, e:
			raise BadCtsUrnSyntax("Bad syntax for pseudo-URN: \"%s\""%urn_string)
		
		size = len(components)
		# split the URN into its main components
		if(size == 5):
			self._passage_component = components[4]
			if(components[3]):
				self._work_component = components[3]
				self._cts_namespace = components[2]
			else:
				raise BadCtsUrnSyntax("Bad URN syntax: no textgroup in \"%s\""%urn_string)
		elif(size == 4):
			if(components[3]):
				self._work_component = components[3]
				self._cts_namespace = components[2]
			else:
				raise BadCtsUrnSyntax("Bad URN syntax: no textgroup in \"%s\""%urn_string)
		else:
			raise BadCtsUrnSyntax("Method initializeURN: bad syntax: \"%s\""%urn_string)
		# split the work_component into its sub-parts
		work_components = self.work_component.split('.')
		size = len(work_components)
		if(size == 3):
			self._version = work_components[2]
			self._work = work_components[1]
			self._textgroup = work_components[0]
		elif(size == 2):
			self._work = work_components[1]
			self._textgroup = work_components[0]
		else:
			self._textgroup = work_components[0]
		#
		if(self.passage_component):
			range_components = self.passage_component.split('-')
			size = len(range_components)
			if(size == 2):
				self._initialize_range(range_components[0],range_components[1])
			elif(size == 1):
				self._initialize_point(range_components[0])
		return
	
	def _initialize_range(self,range_beg,range_end):
		"""docstring for initialize_range"""
		pass
	
	def _initialize_point(self,point):
		"""docstring for initialize_range"""
		pass
	
	def get_urn_without_passage(self):
		"""docstring for get_urn_without_passage"""
		pass
	
	def __str__(self):
		"""
		docstring for __str__
		
		>>> urn_string = "urn:cts:greekLit:tlg0003.tlg001"
		>>> print CTS_URN(urn_string)
		urn:cts:greekLit:tlg0003.tlg001
		
		"""
		return self._as_string

if __name__ == "__main__":
	import doctest
	doctest.testmod()
	